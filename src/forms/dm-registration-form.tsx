import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Alert from "./components/alert";
import { Button } from "./components/button";
import { Input } from "./components/Input";
import { Select } from "./components/select";
import { Participant, participantSchema } from "./schemas/participant";

export default function DmRegistrationForm() {
  const [serverMessage, setServerMessage] = useState("");
  const [serverMessageIsError, setServerMessageIsError] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<Participant>({ resolver: zodResolver(participantSchema) });

  const onSubmit = handleSubmit(async (data) => {
    const response = await fetch(
      "https://dm-registration.api.blz-it.de/participants",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      }
    );

    if (response.ok) {
      setServerMessage("Erfolgreich angemeldet!");
      setServerMessageIsError(false);
      reset();
    } else {
      const json = await response.json();
      if (json.message) {
        setServerMessage(json.message);
      } else {
        setServerMessage(
          "Es ist ein unbekannter Fehler aufgetreten! Bitte versuche es erneut."
        );
      }

      setServerMessageIsError(true);
    }
  });

  return (
    <form className="space-y-8 divide-y divide-gray-200" onSubmit={onSubmit}>
      <div className="space-y-8 divide-y divide-gray-200">
        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Persönliche Informationen
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Die folgenden Angaben sind für die Anmeldung verpflichtend.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
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
                id="occupation"
                label="Beruf"
                error={errors.occupation?.message}
                {...register("occupation")}
              >
                <option value="APPRENTICE">Apprentice</option>
                <option value="PUPIL">Pupil</option>
                <option value="STUDENT">Student</option>
                <option value="EMPLOYEE">Employee</option>
                <option value="OTHER">Other</option>
              </Select>
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
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                id="phone"
                label="Telefonnummer"
                type="text"
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>

            <div className="sm:col-span-6">
              <Input
                id="address-street"
                label="Straße"
                type="text"
                error={errors.address?.street?.message}
                {...register("address.street")}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                id="address-zip"
                label="Postleitzahl"
                type="number"
                error={errors.address?.zip?.message}
                {...register("address.zip")}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                id="address-city"
                label="Stadt"
                type="text"
                error={errors.address?.city?.message}
                {...register("address.city")}
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
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                id="company-name"
                label="Firmenname"
                type="text"
                error={errors.company?.name?.message}
                {...register("company.name")}
              />
            </div>

            <div className="sm:col-span-6">
              <Input
                id="company-address-street"
                label="Straße"
                type="text"
                error={errors.company?.address?.street?.message}
                {...register("company.address.street")}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                id="company-address-zip"
                label="Postleitzahl"
                type="number"
                error={errors.company?.address?.zip?.message}
                {...register("company.address.zip")}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                id="company-address-city"
                label="Stadt"
                type="text"
                error={errors.company?.address?.city?.message}
                {...register("company.address.city")}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-5">
        {serverMessage && (
          <div className="mb-3">
            <Alert isError={serverMessageIsError}>{serverMessage}</Alert>
          </div>
        )}

        <div className="flex justify-end">
          <Button type="submit" isLoading={isSubmitting}>
            Absenden
          </Button>
        </div>
      </div>
    </form>
  );
}
