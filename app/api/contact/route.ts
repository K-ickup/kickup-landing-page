import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nom, email, entreprise, telephone, besoin, message, consent } =
      body;

    // Basic validation
    if (!nom || !email || !entreprise || !besoin) {
      return NextResponse.json(
        { error: "Champs requis manquants" },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Vous devez accepter d'être contacté" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Build email content
    const emailContent = `
Nouvelle demande de contact depuis le site Kickup

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
Reçu le : ${new Date().toLocaleString("fr-FR", { timeZone: "Europe/Paris" })}
    `.trim();

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev",
      to: [process.env.CONTACT_EMAIL || "contact@kick-up.eu"],
      replyTo: email,
      subject: `Nouvelle demande : ${besoin} - ${entreprise}`,
      text: emailContent,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
