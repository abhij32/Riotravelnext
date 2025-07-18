export interface EmailPayload {
  lib_version: string;
  user_id: string;
  service_id: string;
  template_id: string;
  template_params: {
    message: string;
  };
}

export async function sendEmail(message: string) {
  const payload: EmailPayload = {
    lib_version: "3.2.0",
    user_id: "user_IIHiXIBQsN7yEOyzbMXwO",
    service_id: "service_wclajtp",
    template_id: "template_kakd1b9",
    template_params: {
      message,
    },
  };
  const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!response.ok) throw new Error("Failed to send email");
  return response;
}
