export type Lang = "en" | "fr";

export interface Dict {
  lang: Lang;
  siteTitle: string;
  metaDescription: string;
  skipToContent: string;
  nav: {
    about: string;
    pipeline: string;
    results: string;
    models: string;
    stack: string;
    sourceCode: string;
    menu: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    viewResults: string;
    sourceRepo: string;
    statsTitle: string;
    stats: { value: string; label: string }[];
  };
  about: {
    title: string;
    lead: string;
    cards: { icon: string; title: string; text: string; tag: string }[];
  };
  pipeline: {
    title: string;
    lead: string;
    steps: { icon: string; label: string; sub: string }[];
  };
  results: {
    title: string;
    lead: string;
    before: string;
    after: string;
    featured: string;
    demos: {
      id: string;
      title: string;
      meta: { label: string; value: string }[];
      beforeImage: string;
      afterImage: string;
      beforeLabel: string;
      afterLabel: string;
      beforeAlt: string;
      afterAlt: string;
      metrics: { label: string; value: string }[];
      featured?: boolean;
      video?: {
        poster: string;
        captions: { label: string; value: string }[];
        compareMargin?: boolean;
      };
    }[];
  };
  models: {
    title: string;
    lead: string;
    columns: { model: string; type: string; usage: string; result: string; details: string };
    view: string;
    rows: { slug: string; name: string; badge: string; badgeClass: string; usage: string; result: string }[];
  };
  stack: {
    title: string;
    lead: string;
    items: string[];
  };
  footer: {
    copyright: string;
    sourceCode: string;
  };
  modelPage: {
    backToModels: string;
    viewResults: string;
    sourceCode: string;
  };
}
