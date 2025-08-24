export default function MentionsLegales() {
  return (
    <div className="container py-24 sm:py-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Mentions légales</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
            <p>
              <strong>Kickup</strong> - Activité de la société 2MS-IT
              <br />
              SIREN : 949 256 762
              <br />
              Siège social : 40 Rue Alexandre Dumas - 75011 Paris
              <br />
              Directeur de la publication : Jeremy Dumas
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
            <p>
              Ce site est hébergé par <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133, Walnut, CA 91789, USA
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact</h2>
            <p>
              <strong>Email :</strong> contact@kick-up.eu
              <br />
              <strong>Site web :</strong> https://kick-up.eu
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">
              Propriété intellectuelle
            </h2>
            <p>
              Le présent site web et l'ensemble de ses éléments, notamment les
              textes, images, graphismes, logo, icônes, sons, logiciels, sont la
              propriété exclusive de Kickup (2MS-IT), à l'exception des marques,
              logos ou contenus appartenant à d'autres sociétés partenaires ou
              auteurs.
            </p>
            <p>
              Toute reproduction, représentation, modification, publication,
              adaptation de tout ou partie des éléments du site, quel que soit
              le moyen ou le procédé utilisé, est interdite, sauf autorisation
              écrite préalable de Kickup.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Données personnelles</h2>
            <p>
              Kickup s'engage à ce que la collecte et le traitement de vos
              données, effectués à partir du site kick-up.eu, soient conformes
              au règlement général sur la protection des données (RGPD) et à la
              loi Informatique et Libertés.
            </p>
            <p>
              Les données collectées via le formulaire de contact sont utilisées
              uniquement pour répondre à vos demandes et ne sont jamais cédées à
              des tiers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Droit applicable</h2>
            <p>
              Le présent site web est soumis au droit français. En cas de
              litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <div className="border-t pt-8 mt-12 text-center text-muted-foreground">
            <p>
              Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
