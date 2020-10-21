// eslint-disable-next-line
var config =
{
	// Title in appbar
	title                : 'EduMeet',
	// Logo in appbar
	// logo       		 : 'images/logo.svg',

	// Service & Support URL (if not set then not displayed)
	supportUrl           : '',
	// Privacy and dataprotection URL or path
	privacyUrl           : 'privacy/privacy.html',

	// Port configuration
	developmentPort 	 : 3443,
	productionPort  	 : 443,

	/** Resolutions:
	 * 	low ~ 320x240
	 * 	medium ~ 640x480
	 * 	high ~ 1280x720
	 * 	veryhigh ~ 1920x1080
	 * 	ultra ~ 3840x2560
	 **/

	/** Frame rates:
	 * 	1, 5, 10, 15, 20, 25, 30
	 **/

	// Webcam video configuration
	defaultResolution             : 'medium',
	defaultFrameRate              : 15,

	// Shared screen video configuration
	defaultScreenResolution       : 'veryhigh',
	defaultScreenSharingFrameRate : 5,

	// Users layout default (democratic, filmstrip)
	defaultLayout				  : 'democratic',

	// Enable authentication service
	loginEnabled   		 	: false,

	// Enable "file sharing" tab
	enableFileSharing	 	: false,

	/**
	 * Set max number participants in one room that join 
	 * unmuted. Next participant will join automatically muted
	 * Default value is 4
	 * 
	 * Set it to 0 to auto mute all, 
	 * Set it to negative (-1) to never automatically auto mute
	 * but use it with caution
	 * full mesh audio strongly decrease room capacity! 
	 */
	autoMuteThreshold    	: 4,

	// If true, will show media control buttons in separate
	// control bar, not in the ME container.
	buttonControlBar     	: true,

	// If false, will push videos away to make room for side
	// drawer. If true, will overlay side drawer over videos
	drawerOverlayed      	: false,

	// Enable 'user joined the room' notifications
	enableJoinNotification 	: false,

	// Position of notifications
	notificationPosition 	: 'right',

	// Timeout for autohiding topbar and button control bar
	hideTimeout          	: 3000,

	// Max number of participant that will be visible in as speaker
	lastN                	: 4,
	mobileLastN          	: 1,

	// Highest number of lastN the user can select manually in userinteface
	maxLastN             	: 5,

	// Determines whether a specific option should be visibile to the user
	hideUserSetting:
	{ 
		videoSettings           : true,
		audioSettings           : true,
		showNotifications       : true,
		notificationSound       : true,
		permanentTopBar         : true,
		buttonControlBar        : true,
		hiddenControls          : true,
		drawerOverlayed         : true,
		advancedMode            : true,
		lastN                   : true
	},

	/**
	 * Supported browsers version in bowser satisfy format.
	 * See more:
	 * https://www.npmjs.com/package/bowser#filtering-browsers
	 * Otherwise you got a unsupported browser page
	 */
	supportedBrowsers :
	{
		'windows' : {
			'internet explorer' : '>12',
			'microsoft edge'    : '>18'
		},
		'safari'                       : '>12',
		'firefox'                      : '>=60',
		'chrome'                       : '>=74',
		'chromium'                     : '>=74',
		'opera'                        : '>=62',
		'samsung internet for android' : '>=11.1.1.52'
	},

	/* ---------------- Advanced settings ---------------- */

	// Default audio settings
	defaultAudio :
	{
		sampleRate        : 48000,
		channelCount      : 1,
		volume            : 1.0,
		autoGainControl   : true,
		echoCancellation  : true,
		noiseSuppression  : true,
		voiceActivityMute : false,
		sampleSize        : 16
	},

	// Enable or disable simulcast for webcam video
	simulcast                     : true,
	// Enable or disable simulcast for screen sharing video
	simulcastSharing              : false,
	// Simulcast encoding layers and levels
	simulcastEncodings            :
	[
		{ scaleResolutionDownBy: 4 },
		{ scaleResolutionDownBy: 2 },
		{ scaleResolutionDownBy: 1 }
	],

	/**
	 * Alternative simulcast setting:
	 * [
	 *   { maxBitRate: 50000 }, 
	 *	 { maxBitRate: 1000000 },
	 *	 { maxBitRate: 4800000 }
	 *],
	 **/

	/**
	 * White listing browsers that support audio output device selection.
	 * It is not yet fully implemented in Firefox.
	 * See: https://bugzilla.mozilla.org/show_bug.cgi?id=1498512
	 */
	audioOutputSupportedBrowsers :
	[
		'chrome',
		'opera'
	],

	// Socket.io request timeout
	requestTimeout   : 20000,
	requestRetries   : 3,
	transportOptions :
	{
		tcp : true
	},

	/* ------------- Theme colors and fonts ------------- */

	// Background image
	// background          		  : 'images/background.jpg',

	// Default theme
	theme                :
	{
		palette :
		{
			primary :
			{
				main : '#094E98'
			},
			secondary : 
			{
				main : '#464E51'
			}
		},
		overrides :
		{
			MuiAppBar :
			{
				colorPrimary :
				{
					// AppBar default color
					backgroundColor : '#FFFFFF'
				}
			},
		},
		typography :
		{
			useNextVariants : true,
			fontFamily: [
			'"Kumbh Sans"',
			'Nunito',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif'
			].join(','),
		}
	}
};
