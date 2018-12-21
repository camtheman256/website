#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases.
; #Warn  ; Enable warnings to assist with detecting common errors.
SendMode Input  ; Recommended for new scripts due to its superior speed and reliability.
SetWorkingDir %A_ScriptDir%  ; Ensures a consistent starting directory.

^!g:: ;
savedClipboard := Clipboard
MsgBox,65, GradeSpeeeeed, Please place the cursor in the box and fire when ready. Clipboard looks like: %savedClipboard%
IfMsgBox, OK
	Loop, parse, savedClipboard, `n, `r 
	{
		Send %A_LoopField%
		Sleep, 50
		Send {Enter}
		Sleep, 50
	}
return ;