'use client';

import Input from "./input";
import {useTranslations} from "next-intl";
import {sendEmail} from "@/app/actions";
import { useActionState } from "react";

export type ContactFormProps = {
  captchaToken?: string;
};

export default function ContactForm({captchaToken}: ContactFormProps) {
  const t = useTranslations();
  const [state, formAction] = useActionState(sendEmail.bind(null, captchaToken), {});

  return state.success ? (
    <p className="mt-8 text-center">{t('contact_form_success')}</p>
  ) : (
    <>
      {(state.validationErrors || state.sendError) && (
        <p className="mt-8 text-center">{t('contact_api_sending_failed')}</p>
      )}
      <form action={formAction} className="flex flex-col light">
        <Input
          name="name"
          type="text"
          label={t('contact_form_name_label')}
          placeholder={t('contact_form_name_placeholder')}/>
        <Input
          name="email"
          type="email"
          label={t('contact_form_email_label')}
          placeholder={t('contact_form_email_placeholder')}/>
        <Input
          name="message"
          type="textarea"
          label={t('contact_form_message_label')}
          placeholder={t('contact_form_message_placeholder')}/>
          <button type="submit"
                  className="mt-10 px-12 py-2 ml-auto mr-auto max-w-sm focus:outline-none">
            <img className="w-8 h-8 mr-2 inline-block" src="/images/icons/send.svg" alt="→"/>
            {t('contact_form_send_button')}
          </button>
      </form>
    </>
  );
}
