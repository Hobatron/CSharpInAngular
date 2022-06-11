npm i
ng serve
Interesting things to look at:
  - models/script.store.ts
    - This is what points at the remote file.
  - services/script.service.ts
    - This is what attaches the script to the window
  - manage-driver.comp.ts
    - where we call script.load, passing the script to load then running .boot, to start the script
  - driver.comp.ts
    - subs to the formControls.valueChanges and the calls to Maths.FormCalcs(x, y) => number
