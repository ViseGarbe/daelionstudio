# Daelion Studio

Sito statico per Daelion Studio, pronto per GitHub Pages.

## Pubblicazione su GitHub Pages

1. Pubblica il contenuto del repository sul branch `main`.
2. In GitHub vai su **Settings → Pages**.
3. In **Build and deployment** seleziona **GitHub Actions**.
4. Ogni push su `main` avvierà il deploy automatico tramite `.github/workflows/deploy-pages.yml`.

L'indirizzo iniziale sarà:

`https://visegarbe.github.io/daelionstudio/`

## Collegamento del dominio acquistato su Aruba

Dopo aver scelto il dominio definitivo:

- per un dominio principale (`esempio.it`), in Aruba crea quattro record `A` per `@` verso `185.199.108.153`, `185.199.109.153`, `185.199.110.153` e `185.199.111.153`;
- per `www`, crea un record `CNAME` verso `visegarbe.github.io`;
- in GitHub vai su **Settings → Pages → Custom domain**, inserisci il dominio e abilita **Enforce HTTPS** quando il certificato sarà pronto.

Per attivare anche il dominio personalizzato nel repository, aggiungi un file `CNAME` nella root con una sola riga contenente il dominio scelto, ad esempio `www.esempio.it`.
