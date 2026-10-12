// Cloudflare Pages Function: POST /api/contact
// Set RESEND_API_KEY and CONTACT_TO (the inbox that receives bookings) in Pages > Settings > Environment variables.
// Verify the prosperdrivingschoolnj.com domain in Resend so web@prosperdrivingschoolnj.com can send.
export async function onRequestPost({ request, env }) {
  const fd = await request.formData();
  if (fd.get('website')) return new Response('ok'); // honeypot
  const g = k => String(fd.get(k) || '').slice(0, 2000);
  const name = g('name'), phone = g('phone'), email = g('email');
  if (!name || !phone) return new Response('Missing fields', { status: 400 });
  const text = `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nInterest: ${g('service')}\nTown: ${g('town')}\nAge group: ${g('age')}\n\n${g('message')}`;
  if (env.RESEND_API_KEY && env.CONTACT_TO) {
    const body = { from: 'Prosper Driving School <web@prosperdrivingschoolnj.com>', to: env.CONTACT_TO, subject: `New lesson request from ${name}`, text };
    if (email) body.reply_to = email;
    const r = await fetch('https://api.resend.com/emails', { method: 'POST', headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
    if (!r.ok) return new Response('Send failed', { status: 502 });
  } else return new Response('Email not configured', { status: 503 });
  if ((request.headers.get('Accept') || '').includes('application/json')) return Response.json({ ok: true });
  return Response.redirect(new URL('/contact/?sent=1', request.url), 303);
}
