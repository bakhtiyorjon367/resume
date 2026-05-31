# Static assets

Place files in the `public/` folder (project root). They are served from the site URL root (`/`).

## Resume PDFs

| File               | Path                 | Used when UI language is |
| ------------------ | -------------------- | ------------------------ |
| Korean resume      | `resume-ko.pdf`      | KO                       |
| English resume     | `resume-en.pdf`      | EN                       |

## Portfolio PDFs

| File                  | Path                    | Used when UI language is |
| --------------------- | ----------------------- | ------------------------ |
| Korean portfolio      | `portfolio-ko.pdf`      | KO                       |
| English portfolio     | `portfolio-en.pdf`      | EN                       |

## Images

| File          | Path                          |
| ------------- | ----------------------------- |
| Profile photo | `images/profileImage.JPG`     |

## Where downloads appear

- **Resume (home) footer**: `resume-ko.pdf` or `resume-en.pdf` by language
- **Portfolio page footer**: `portfolio-ko.pdf` or `portfolio-en.pdf` by language
- **About page footer**: no download button
- **Contact page**: both CV and portfolio buttons (same language rule); footer has no download button

Until you upload the PDFs, download links will 404 in production.
