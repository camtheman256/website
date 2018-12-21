---
layout: stuff
title: GradeSpeed
subtitle: A quick copy and paste script to easily load grades into Prologic TEAMS.
---

#### _Attention LASA Teachers and other users of Prologic TEAMS..._

Do you store your grades in an Excel spreadsheet or Google sheet? Do you use Windows? Do you wish there was a faster way to transfer your grades into TEAMS with only a few clicks?

Well, now there is! Introducing <span title="Pun intended lol" data-toggle="tooltip">**GradeSpeed**</span>, an [AutoHotkey](https://autohotkey.com) script and compiled executable to copy your grades into TEAMS with speed and precision.

<a class="btn btn-primary" href="{% link files/copygradesv2.exe %}"><i class="fab fa-windows"></i>&ensp;Download GradeSpeed 2.0 EXE</a>

<a class="btn btn-success" href="{% link files/copygradesv2.ahk %}" title="Requires AutoHotkey to run" data-toggle="tooltip" data-placement="right"><i class="fas fa-file-download"></i>&ensp;Download GradeSpeed 2.0 SCRIPT</a>

## Usage

Here's how to use the script:

1. Run the `copygradesv2.exe` file or the `.ahk` script if you have AutoHotkey. **You only need to do this once** and can verify that the script is running by checking your system tray area. It will appear as a green icon with a white 'H'.
2. Go to the spreadsheet and copy the class's grades for the assignment that you would like to enter to the clipboard. The grades that you are copying should match up one-to-one with and be **in the same order and number** as the students in TEAMS.
  - **Note:** Please format your grades in columns because the script reads the grades line by line. Just copy the numbers, not the students names.
3. Navigate to TEAMS in the browser. Place your cursor into the top student's grade box in the column for the assignment you are copying.
4. Now, press <kbd><kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>g</kbd></kbd>. This will launch a dialog box showing you the contents of your clipboard. If all the grades are displayed, one on each line, press OK to start the copying process. If not, cancel, go back, and try to copy them again. The entire process should only take a few seconds.
  - Don't touch the computer while the grades are copying, or else the process will not finish and could cause issues.
5. Verify that the grades have been copied properly by checking the first and last student to see if their grades match the Excel spreadsheet or Google sheet the grades were copied from.
