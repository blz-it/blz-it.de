import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Alert } from "./component/alert";
import { Button } from "./component/button";
import { Input } from "./component/input";
import { Select } from "./component/select";
import { fixOptional } from "./utils";

const institutionSchema = z.object({
  name: z
    .string()
    .min(1, "Der Name darf nicht leer sein.")
    .max(255, "Der Name darf nicht länger als 255 Zeichen sein."),
  city: z
    .string()
    .min(1, "Die Stadt darf nicht leer sein.")
    .max(255, "Die Stadt darf nicht länger als 255 Zeichen sein."),
});

export const participantSchema = z.object({
  firstName: z
    .string()
    .min(1, "Der Vorname darf nicht leer sein.")
    .max(255, "Der Vorname darf nicht länger als 255 Zeichen sein."),
  lastName: z
    .string()
    .min(1, "Der Nachname darf nicht leer sein.")
    .max(255, "Der Nachname darf nicht länger als 255 Zeichen sein."),
  birthday: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Ungültiges Datum"),
  email: z.string().email("Ungültige E-Mail-Adresse."),
  state: z.enum(
    [
      "BADEN_WUERTTEMBERG",
      "BAVARIA",
      "BERLIN",
      "BRANDENBURG",
      "BREMEN",
      "HAMBURG",
      "HESSE",
      "MECKLENBURG_WESTERN_POMERANIA",
      "LOWER_SAXONY",
      "NORTH_RHINE_WESTPHALIA",
      "RHINELAND_PALATINATE",
      "SAARLAND",
      "SAXONY",
      "SAXONY_ANHALT",
      "SCHLESWIG_HOLSTEIN",
      "THURINGIA",
    ],
    { required_error: "Das Bundesland ist erforderlich." },
  ),
  city: z
    .string()
    .min(1, "Die Stadt darf nicht leer sein.")
    .max(255, "Die Stadt darf nicht länger als 255 Zeichen sein."),
  phone: z.preprocess(
    fixOptional,
    z
      .string()
      .min(1, "Die Telefonnummer darf nicht leer sein.")
      .max(255, "Die Telefonnummer darf nicht länger als 255 Zeichen sein.")
      .optional(),
  ),
  occupation: z.enum(["APPRENTICE", "PUPIL", "STUDENT", "EMPLOYEE", "OTHER"], {
    required_error: "Die Beschäftigungsart ist erforderlich.",
  }),
  company: z.preprocess(fixOptional, institutionSchema.optional()),
  educationalInsitution: z.preprocess(
    fixOptional,
    institutionSchema.optional(),
  ),
});

type Participant = z.infer<typeof participantSchema>;

interface Message {
  type: "error" | "success";
  text: string;
}

export default function RegistrationForm() {
  const [message, setMessage] = useState<Message | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<Participant>({ resolver: zodResolver(participantSchema) });

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch(
      "https://registration-api.blz-it.de/participants",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      },
    );

    if (response.ok) {
      setMessage({ type: "success", text: "Erfolgreich angemeldet!" });
      reset();
    } else {
      const json = await response.json();
      setMessage({
        type: "error",
        text:
          json.message ??
          "Es ist ein unbekannter Fehler aufgetreten! Bitte versuche es erneut.",
      });
    }
  });

  return (
    <form className="space-y-8" onSubmit={onSubmit}>
      <div className="space-y-8">
        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Persönliche Informationen
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Die folgenden Angaben sind für die Anmeldung verpflichtend.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                id="firstName"
                label="Vorname"
                type="text"
                error={errors.firstName?.message}
                {...register("firstName")}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                id="lastName"
                label="Nachname"
                type="text"
                error={errors.lastName?.message}
                {...register("lastName")}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                id="birthday"
                label="Geburtstag"
                type="date"
                error={errors.birthday?.message}
                {...register("birthday")}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                id="email"
                label="E-Mail-Adresse"
                type="email"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <div className="sm:col-span-3">
              <Select
                id="state"
                label="Bundesland"
                error={errors.state?.message}
                {...register("state")}
              >
                <option value="BADEN_WUERTTEMBERG">Baden-Württemberg</option>
                <option value="BAVARIA">Bayern</option>
                <option value="BERLIN">Berlin</option>
                <option value="BRANDENBURG">Brandenburg</option>
                <option value="BREMEN">Bremen</option>
                <option value="HAMBURG">Hamburg</option>
                <option value="HESSE">Hessen</option>
                <option value="MECKLENBURG_WESTERN_POMERANIA">
                  Mecklenburg-Vorpommern
                </option>
                <option value="LOWER_SAXONY">Niedersachsen</option>
                <option value="NORTH_RHINE_WESTPHALIA">
                  Nordrhein-Westfalen
                </option>
                <option value="RHINELAND_PALATINATE">Rheinland-Pfalz</option>
                <option value="SAARLAND">Saarland</option>
                <option value="SAXONY">Sachsen</option>
                <option value="SAXONY_ANHALT">Sachsen-Anhalt</option>
                <option value="SCHLESWIG_HOLSTEIN">Schleswig-Holstein</option>
                <option value="THURINGIA">Thüringen</option>
              </Select>
            </div>

            <div className="sm:col-span-3">
              <Input
                id="city"
                label="Stadt"
                type="text"
                error={errors.city?.message}
                {...register("city")}
              />
            </div>

            <div className="sm:col-span-3">
              <Select
                id="occupation"
                label="Beruf"
                error={errors.occupation?.message}
                {...register("occupation")}
              >
                <option value="APPRENTICE">Auszubildende*r</option>
                <option value="PUPIL">Schüler*in</option>
                <option value="STUDENT">Student*in</option>
                <option value="EMPLOYEE">Angestellte*r</option>
                <option value="OTHER">Sonstiges</option>
              </Select>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Zusätzliche Persönliche Informationen
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Die folgenden Angaben sind vollkommen optional.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                id="phone"
                label="Telefonnummer"
                type="text"
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Deine Firma
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Falls du in einer Firma arbeitest, kannst du diese hier angeben.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                id="company-name"
                label="Firmenname"
                type="text"
                error={errors.company?.name?.message}
                {...register("company.name")}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                id="company-address-city"
                label="Stadt"
                type="text"
                error={errors.company?.city?.message}
                {...register("company.city")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        {message && (
          <div className="mb-3">
            <Alert type={message.type}>{message.text}</Alert>
          </div>
        )}

        <div className="flex justify-end">
          <Button type="submit" isLoading={isSubmitting}>
            Anmelden
          </Button>
        </div>
      </div>
    </form>
  );
}
