import fs from "fs";

test("Profile form submission correctly makes a post request with new password to the database", () => {
  const fileContent = fs.readFileSync(
    "./src/components/Profile/ProfileForm.js",
    "utf8"
  );

  // 1. Check for "JSON.stringify" at least once
  expect(fileContent).toMatch(/JSON\.stringify/g);

  // 2. Check for correct url path
  expect(fileContent).toMatch(
    /https:\/\/identitytoolkit\.googleapis\.com\/v1\/accounts:update\?key=/
  );

  // 3. Check for "POST" at least once
  expect(fileContent).toMatch(/POST/g);
});
