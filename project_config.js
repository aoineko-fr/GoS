//██▀▀█▀▀██▀▀▀▀▀▀▀███▀▀█▀▀▀▀▀▀▀▀█
//██  ▀  █▄  ▄▄▄▄  ▀  ▄█ ▄▀▀ █  █
//█  ▄ ▄  ▀▀  ▀█▀  ▄  ▀█ ▀▄█ █▄ █
//█▄▄█▄█▄▄▄▄▄▄██▄▄███▄▄█▄▄▄▄▄▄▄▄█
// by Guillaume 'Aoineko' Blanchard under CC BY-SA license

//*****************************************************************************
// TOOLS SETTINGS
//*****************************************************************************
Emulator = `${ToolsDir}OpenMSX/openmsx`
// Emulator = `${ToolsDir}Emulicious/Emulicious`
// Emulator = `${ToolsDir}BlueMSX/blueMSX`
// Emulator = `${ToolsDir}MEISEI/meisei`
// Emulator = `${ToolsDir}fMSX/fMSX`
// Emulator = `${ToolsDir}RuMSX/MSX`

// ***************************************************************************
// * PROJECT SETTINGS                                                        *
// ***************************************************************************

ProjName = "gos";

//  List of modules to link
LibModules = [ "system", "bios", "vdp", "print", "input", "memory", "math", "draw", "msxi/msxi_unpack", "pt3/pt3_player", "ayfx/ayfx_player" ];

//  MSX version:
//  - 1		MSX 1
//  - 2		MSX 2
//  - 2P		MSX 2+
//  - TR		MSX TurboR
Machine = "2";

// Target:
// - BIN				.bin	BASIC binary program (8000h~)
// - ROM_8K				.rom	8KB ROM in page 1 (4000h ~ 5FFFh)
// - ROM_8K_P2			.rom	8KB ROM in page 2 (8000h ~ 9FFFh)
// - ROM_16K			.rom	16KB ROM in page 1 (4000h ~ 7FFFh)
// - ROM_16K_P2			.rom	16KB ROM in page 2 (8000h ~ BFFFh)
// - ROM_32K			.rom	32KB ROM in page 1-2 (4000h ~ BFFFh)
// - ROM_48K			.rom	48KB ROM in page 0-2 (0000h ~ BFFFh). Pages 1-2 visible at start
// - ROM_48K_ISR		.rom	48KB ROM in page 0-2 (0000h ~ BFFFh). Pages 0-2 visible at start
// - ROM_64K			.rom	64KB ROM in page 0-3 (0000h ~ FFFFh). Pages 1-2 visible at start
// - ROM_64K_ISR		.rom	64KB ROM in page 0-3 (0000h ~ FFFFh). Pages 0-2 visible at start
// - ROM_ASCII8			.rom	128KB ROM using ASCII-8 mapper
// - ROM_ASCII16		.rom	128KB ROM using ASCII-16 mapper
// - ROM_KONAMI			.rom	128KB ROM using Konami mapper (8KB segments)
// - ROM_KONAMI_SCC		.rom	128KB ROM using Konami SCC mapper (8KB segments)
// - DOS1				.com	MSX-DOS 1 program (0100h~) No direct acces to Main-ROM
// - DOS2				.com	MSX-DOS 2 program (0100h~) No direct acces to Main-ROM
Target = "ROM_32K";

// Assembler code optimizer
// - None
// - PeepHole	SDCC otpimizer
// - MDL		MDL z80 otpimizer
AsmOptim = "PeepHole";

// Optim:
// - Default
// - Speed
// - Size
Optim = "Speed";

// Additionnal compilation flag
// CompileOpt = 

// Skip file if compile data is newer than the source 
// CompileSkipOld = false;

// Verbose mode: 0 or 1
Verbose = true;

//*******************************************************************************
// EMULATOR SETING
//*******************************************************************************

// ***************************************************************************
// * BUILD STEPS                                                             *
// ***************************************************************************
DoClean   = false;
DoCompile = true;
DoMake    = true;
DoPackage = true;
DoDeploy  = true;
DoRun     = true;
