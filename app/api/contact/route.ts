import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const { nom, email, entreprise, telephone, besoin, message, consent } =
      await req.json();

    if (
      !nom?.trim() ||
      !email?.trim() ||
      !entreprise?.trim() ||
      !besoin?.trim() ||
      !consent
    ) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    if (!EMAIL_RE.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    const emailContent = `Nouvelle demande de contact depuis le site Kickup

📋 INFORMATIONS CLIENT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Nom : ${nom}
Email : ${email}
Entreprise : ${entreprise}
Téléphone : ${telephone || "Non renseigné"}

🎯 BESOIN
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Type de besoin : ${besoin}

💬 MESSAGE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${message || "Aucun message supplémentaire"}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Reçu le : ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}`;

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? "contact@kickup.studio",
      to: [process.env.CONTACT_EMAIL ?? "contact@kickup.studio"],
      replyTo: email,
      subject: `Nouveau contact : ${nom} — ${entreprise}`,
      text: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
