import { education } from "./education";
import { experience } from "./experience";
import { pdfUrls, profile } from "./profile";

export const workHistory = experience.map((job) => ({
  company: job.company,
  period: job.period.split(" · ")[0],
}));

export const contact = {
  name: profile.name,
  nickname: "Ali",
  photoUrl: profile.photoUrl,
  phone: "01075374742",
  email: profile.email,
  telegram: {
    username: "themamajonovs",
    url: "https://t.me/themamajonovs",
  },
  websites: [
    { label: "chuncheon.uz", url: "https://chuncheon.uz" },
    { label: "optomkoreya.uz", url: "https://optomkoreya.uz" },
  ],
  location: profile.location,
  university: education[0],
  topik: "Level 5",
  toeic: "730",
  inKoreaSince: "2016",
  github: profile.github,
  workHistory,
  pdfUrls,
};
