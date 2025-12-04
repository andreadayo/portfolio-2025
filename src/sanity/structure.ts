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
            ])
        ),

      // include other documents
    ]);
