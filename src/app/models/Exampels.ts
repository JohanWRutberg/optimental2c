import { z } from "zod";

// skapa schema för stängar
const mySchema = z.string();

// parsing
mySchema.parse("dave"); // => "dave"
mySchema.parse(55); // => throw error

// "safe" parsing (skickar tillbaka ett objekt)
mySchema.safeParse("dave"); // => {success: true; data: "dave"}
mySchema.safeParse(55); // => {success: false; error: ZodError}

/////////////////
const schema = z.coerce.string();
schema.parse("dave"); // => "dave"
schema.parse("42"); // => "42"
schema.parse(true); // => "true"
