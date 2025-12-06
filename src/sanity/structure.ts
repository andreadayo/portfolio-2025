import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Nav")
        .child(S.document().schemaType("navLinks").documentId("navLinks")),
      S.listItem()
        .title("Home")
        .child(
          S.list()
            .title("Home Sections")
            .items([
              S.listItem()
                .title("Hero")
                .child(
                  S.document().schemaType("homeHero").documentId("homeHero")
                ),
              S.listItem()
                .title("About")
                .child(
                  S.document().schemaType("homeAbout").documentId("homeAbout")
                ),
              S.listItem()
                .title("Technologies")
                .child(
                  S.document().schemaType("homeTech").documentId("homeTech")
                ),
            ])
        ),
      S.listItem()
        .title("About")
        .child(
          S.list()
            .title("About Sections")
            .items([
              S.listItem()
                .title("Introduction")
                .child(
                  S.document().schemaType("aboutIntro").documentId("aboutIntro")
                ),
              S.listItem()
                .title("Approach")
                .child(
                  S.document()
                    .schemaType("aboutApproach")
                    .documentId("aboutApproach")
                ),
              S.listItem()
                .title("Experience & Education")
                .child(
                  S.document()
                    .schemaType("aboutExperience")
                    .documentId("aboutExperience")
                ),
            ])
        ),
      S.listItem()
        .title("Footer")
        .child(S.document().schemaType("footer").documentId("footer")),

      // include other documents
    ]);
