import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Alert from "./components/alert";
import { Button } from "./components/button";
import { Input } from "./components/input";
import { Select } from "./components/select";
import { Participant, participantSchema } from "./schemas/participant";

export default function DmRegistrationForm() {
  const { t } = useTranslation();

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
              {t("dmRegistration.form.personalInformation.title")}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {t("dmRegistration.form.personalInformation.subtitle")}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                id="firstName"
                label={t("dmRegistration.form.fields.firstName")}
                type="text"
                error={errors.firstName?.message}
                {...register("firstName")}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                id="lastName"
                label={t("dmRegistration.form.fields.lastName")}
                type="text"
                error={errors.lastName?.message}
                {...register("lastName")}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                id="birthday"
                label={t("dmRegistration.form.fields.birthday")}
                type="date"
                error={errors.birthday?.message}
                {...register("birthday")}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                id="email"
                label={t("dmRegistration.form.fields.email")}
                type="email"
                error={errors.email?.message}
                {...register("email")}
              />
            </div>

            <div className="sm:col-span-3">
              <Select
                id="occupation"
                label={t("dmRegistration.form.fields.occupation.title")}
                error={errors.occupation?.message}
                {...register("occupation")}
              >
                <option value="APPRENTICE">
                  {t("dmRegistration.form.fields.occupation.apprentice")}
                </option>
                <option value="PUPIL">
                  {t("dmRegistration.form.fields.occupation.pupil")}
                </option>
                <option value="STUDENT">
                  {t("dmRegistration.form.fields.occupation.student")}
                </option>
                <option value="EMPLOYEE">
                  {t("dmRegistration.form.fields.occupation.employee")}
                </option>
                <option value="OTHER">
                  {t("dmRegistration.form.fields.occupation.other")}
                </option>
              </Select>
            </div>
            <div className="sm:col-span-3">
              <Select
                id="state"
                label={t("dmRegistration.form.fields.state.title")}
                error={errors.state?.message}
                {...register("state")}
              >
                <option value="BADEN_WUERTTEMBERG">
                  {t("dmRegistration.form.fields.state.badenWuerttemberg")}
                </option>
                <option value="BAVARIA">
                  {t("dmRegistration.form.fields.state.bavaria")}
                </option>
                <option value="BERLIN">
                  {t("dmRegistration.form.fields.state.berlin")}
                </option>
                <option value="BRANDENBURG">
                  {t("dmRegistration.form.fields.state.brandenburg")}
                </option>
                <option value="BREMEN">
                  {t("dmRegistration.form.fields.state.bremen")}
                </option>
                <option value="HAMBURG">
                  {t("dmRegistration.form.fields.state.hamburg")}
                </option>
                <option value="HESSE">
                  {t("dmRegistration.form.fields.state.hesse")}
                </option>
                <option value="MECKLENBURG_WESTERN_POMERANIA">
                  {t(
                    "dmRegistration.form.fields.state.mecklenburgWesternPomerania"
                  )}
                </option>
                <option value="LOWER_SAXONY">
                  {t("dmRegistration.form.fields.state.lowerSaxony")}
                </option>
                <option value="NORTH_RHINE_WESTPHALIA">
                  {t("dmRegistration.form.fields.state.northRhineWestphalia")}
                </option>
                <option value="RHINELAND_PALATINATE">
                  {t("dmRegistration.form.fields.state.rhinelandPalatinate")}
                </option>
                <option value="SAARLAND">
                  {t("dmRegistration.form.fields.state.saarland")}
                </option>
                <option value="SAXONY">
                  {t("dmRegistration.form.fields.state.saxony")}
                </option>
                <option value="SAXONY_ANHALT">
                  {t("dmRegistration.form.fields.state.saxonyAnhalt")}
                </option>
                <option value="SCHLESWIG_HOLSTEIN">
                  {t("dmRegistration.form.fields.state.schleswigHolstein")}
                </option>
                <option value="THURINGIA">
                  {t("dmRegistration.form.fields.state.thuringia")}
                </option>
              </Select>
            </div>
          </div>
        </div>

        <div className="pt-8">
          <div>
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              {t("dmRegistration.form.additionalPersonalInformation.title")}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {t("dmRegistration.form.additionalPersonalInformation.subtitle")}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                id="phone"
                label={t("dmRegistration.form.fields.phone")}
                type="text"
                error={errors.phone?.message}
                {...register("phone")}
              />
            </div>

            <div className="sm:col-span-6">
              <Input
                id="address-street"
                label={t("dmRegistration.form.fields.street")}
                type="text"
                error={errors.address?.street?.message}
                {...register("address.street")}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                id="address-zip"
                label={t("dmRegistration.form.fields.zip")}
                type="number"
                error={errors.address?.zip?.message}
                {...register("address.zip")}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                id="address-city"
                label={t("dmRegistration.form.fields.city")}
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
              {t("dmRegistration.form.companyInformation.title")}
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              {t("dmRegistration.form.companyInformation.subtitle")}
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <Input
                id="company-name"
                label={t("dmRegistration.form.fields.companyName")}
                type="text"
                error={errors.company?.name?.message}
                {...register("company.name")}
              />
            </div>

            <div className="sm:col-span-6">
              <Input
                id="company-address-street"
                label={t("dmRegistration.form.fields.street")}
                type="text"
                error={errors.company?.address?.street?.message}
                {...register("company.address.street")}
              />
            </div>

            <div className="sm:col-span-3">
              <Input
                id="company-address-zip"
                label={t("dmRegistration.form.fields.zip")}
                type="number"
                error={errors.company?.address?.zip?.message}
                {...register("company.address.zip")}
              />
            </div>
            <div className="sm:col-span-3">
              <Input
                id="company-address-city"
                label={t("dmRegistration.form.fields.city")}
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
            {t("dmRegistration.form.submit")}
          </Button>
        </div>
      </div>
    </form>
  );
}
