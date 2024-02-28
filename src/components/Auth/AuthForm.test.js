import fs from "fs";

test("Signup form submission correctly makes a post request with user credentials to the database", () => {
  const fileContent = fs.readFileSync(
    "./src/components/Auth/AuthForm.js",
    "utf8"
  );

  // 1. Check for "JSON.stringify" at least once
  expect(fileContent).toMatch(/JSON\.stringify/g);

  // 2. Check for correct url path
  expect(fileContent).toMatch(
    /https:\/\/identitytoolkit\.googleapis\.com\/v1\/accounts:signUp\?key=/
  );

  // 3. Check for "POST" at least once
  expect(fileContent).toMatch(/POST/g);
});
