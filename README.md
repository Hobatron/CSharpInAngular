1. npm i
2. ng serve
### Interesting things to look at:
  - [models/script.store.ts](https://github.com/Hobatron/CSharpInAngular/blob/master/src/app/models/script.store.ts)
    - This is what points at the remote file.
  - [services/script.service.ts](https://github.com/Hobatron/CSharpInAngular/blob/master/src/app/services/script.service.ts)
    - This is what attaches the script to the window
  - [manage-driver.comp.ts](https://github.com/Hobatron/CSharpInAngular/blob/master/src/app/manage-driver/manage-driver.component.ts)
    - where we call script.load, then run dotnet.boot, to start the script
  - [driver.comp.ts](https://github.com/Hobatron/CSharpInAngular/blob/master/src/app/driver/driver.component.ts)
    - subs to the formControls.valueChanges and the calls to Maths.FormCalcs(x, y) => number


### Program.cs used to make script:

```C#
using System;
using DotNetJS;
using Microsoft.JSInterop;

namespace Maths;

public partial class Program
{
    // Entry point is invoked by the JavaScript runtime on boot.
    public static void Main()
    {
    }

    [JSInvokable]
    public static int FormCalcs(int x, int y)
    {
        return x + y;
    }
}
```
