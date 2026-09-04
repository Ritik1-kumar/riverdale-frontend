import { useState } from "react";
import { Stethoscope, ArrowRight, Check, CalendarCheck } from "lucide-react";

function renderTemplate(template, values, boldKeys = []) {
  if (!template) return null;
  return template.split(/(\{\w+\})/g).map((part, i) => {
    const match = part.match(/^\{(\w+)\}$/);
    if (!match) return part;
    const key = match[1];
    const value = values[key];
    return boldKeys.includes(key) ? (
      <strong key={i} className="text-foreground">
        {value}
      </strong>
    ) : (
      value
    );
  });
}

export default function ContactForm({
  doctors = [],
  confirmButtonLabel,
  copy = {},
}) {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [reason, setReason] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit =
    selectedDoctor && selectedDay && selectedTime && name && phone;
  const selectedDayObj = selectedDoctor?.opdDays?.find(
    (d) => d.label === selectedDay,
  );
  const availableSlots = selectedDayObj?.timeSlots ?? [];

  function handleDoctorSelect(doctor) {
    setSelectedDoctor(doctor);
    setSelectedDay(null);
    setSelectedTime(null);
  }
  function handleDaySelect(label) {
    setSelectedDay(label);
    setSelectedTime(null);
  }
  function resetForm() {
    setSelectedDoctor(null);
    setSelectedDay(null);
    setSelectedTime(null);
    setName("");
    setPhone("");
    setReason("");
    setSubmitted(false);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div>
        <div className="rounded-3xl border border-border bg-card p-8 shadow-float md:p-10 text-center py-18 md:py-20">
          <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-mist text-primary">
            <CalendarCheck className="h-8 w-8" />
          </span>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight">
            {copy.successHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-md leading-relaxed text-muted-foreground">
            {renderTemplate(
              copy.successMessage,
              {
                name: name.split(" ")[0],
                dayTime: `${selectedDay} at ${selectedTime}`,
                doctor: selectedDoctor.name,
                phone,
              },
              ["dayTime", "doctor"],
            )}
          </p>
          <button
            onClick={resetForm}
            className="mt-8 cursor-pointer rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
          >
            {copy.resetButtonLabel}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-border bg-card p-8 shadow-float md:p-10">
      <form className="space-y-9" onSubmit={handleSubmit}>
        {/* Step 1 */}
        <div>
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="grid h-7 w-7 place-items-center rounded-full surface-deep text-xs">
              1
            </span>
            {copy.step1Label}
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {doctors.map((doctor) => {
              const active = selectedDoctor?.id === doctor.id;
              return (
                <button
                  type="button"
                  key={doctor.id ?? doctor.name}
                  onClick={() => handleDoctorSelect(doctor)}
                  className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                    active
                      ? "border-primary bg-mist/60 shadow-soft"
                      : "border-border bg-background hover:border-aqua"
                  }`}
                >
                  <span className="flex items-center justify-between">
                    <Stethoscope
                      className={`h-5 w-5 ${active ? "text-primary" : "text-muted-foreground"}`}
                      aria-hidden="true"
                    />
                    {active && (
                      <Check className="h-5 w-5 text-primary" strokeWidth={3} />
                    )}
                  </span>
                  <span className="mt-3 block font-display text-base font-semibold">
                    {doctor.name}
                  </span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {doctor.specialty}
                  </span>
                  <span className="mt-3 block text-xs font-medium uppercase tracking-wider text-primary">
                    {doctor.opdLabel}:{" "}
                    {(doctor.opdDays ?? []).map((d) => d.label).join(" · ")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 2 */}
        <div
          className={
            selectedDoctor
              ? ""
              : "pointer-events-none opacity-40 transition-opacity duration-500"
          }
        >
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="grid h-7 w-7 place-items-center rounded-full surface-deep text-xs">
              2
            </span>
            {copy.step2Label}
          </p>
          {selectedDoctor ? (
            <div className="flex flex-wrap gap-3">
              {(selectedDoctor.opdDays ?? []).map((d) => (
                <button
                  type="button"
                  key={d.id ?? d.label}
                  onClick={() => handleDaySelect(d.label)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                    selectedDay === d.label
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-aqua"
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              {copy.doctorHelperText}
            </p>
          )}
        </div>

        {/* Step 3 */}
        <div
          className={
            selectedDay
              ? ""
              : "pointer-events-none opacity-40 transition-opacity duration-500"
          }
        >
          <p className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="grid h-7 w-7 place-items-center rounded-full surface-deep text-xs">
              3
            </span>
            {copy.step3Label}
          </p>
          {selectedDay ? (
            <div className="flex flex-wrap gap-3">
              {availableSlots.map((slot) => (
                <button
                  type="button"
                  key={slot.id ?? slot.label}
                  onClick={() => setSelectedTime(slot.label)}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
                    selectedTime === slot.label
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-foreground hover:border-aqua"
                  }`}
                >
                  {slot.label}
                </button>
              ))}
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">
              {copy.timeHelperText}
            </p>
          )}
        </div>

        {/* Contact fields */}
        <div className="space-y-4 border-t border-border pt-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              placeholder={copy.namePlaceholder}
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
            <input
              placeholder={copy.phonePlaceholder}
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
            />
          </div>
          <textarea
            placeholder={copy.reasonPlaceholder}
            rows={3}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
          />
        </div>

        {selectedDoctor && selectedDay && selectedTime && (
          <div className="rounded-2xl bg-mist/60 p-5 text-sm leading-relaxed">
            <span className="font-semibold text-primary">
              {copy.selectionLabel}
            </span>{" "}
            {selectedDoctor.name} → {selectedDay} → {selectedTime}
          </div>
        )}

        <button
          type="submit"
          disabled={!canSubmit}
          className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-sm font-semibold transition-all duration-300 ${
            canSubmit
              ? "surface-deep shadow-float hover:-translate-y-0.5"
              : "cursor-not-allowed bg-mist text-muted-foreground"
          }`}
        >
          {confirmButtonLabel}
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>
    </div>
  );
}
