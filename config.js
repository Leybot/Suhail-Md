const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="lernsky43@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Leybot/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/02736372ad67e87f8be6a.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "50931118037" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "50931118037";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "50931118037";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/02736372ad67e87f8be6a.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "50931118037,50931118037";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "null";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_13_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDM3LFxuICAgICAgICAyLFxuICAgICAgICA1MyxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMjA3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjIxLFxuICAgICAgICA5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMSxcbiAgICAgICAgMzgsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDYxLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTQwLFxuICAgICAgICA2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNSxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQzLFxuICAgICAgICA2NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNzcsXG4gICAgICAgIDg3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDk5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDc5LFxuICAgICAgICA1NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODksXG4gICAgICAgIDc4LFxuICAgICAgICA5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxMTIsXG4gICAgICAgIDkzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDksXG4gICAgICAgIDQxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDUzLFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICAyNixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzgsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI2LFxuICAgICAgICAzNyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMixcbiAgICAgICAgOSxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDksXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDc1LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVWl2ZHptc0tYUDZDM1RId1ROeWZwN0NNWmN1aDFsejdrancxQWhjNDVxQT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS3Vla3JkMXNSSUNVb2RQakhuTnYtUVwiLFxuICBcInBob25lSWRcIjogXCIxZjg5YWU1NS1mNTNkLTQ2ZmYtOTU4Ny1lODViZThmMGEzYzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE2LFxuICAgICAgMTg4LFxuICAgICAgOTcsXG4gICAgICAyNTAsXG4gICAgICAxNTIsXG4gICAgICAyMzEsXG4gICAgICAxNzgsXG4gICAgICA2OSxcbiAgICAgIDIyNyxcbiAgICAgIDIyLFxuICAgICAgMzAsXG4gICAgICAxMDgsXG4gICAgICAxODIsXG4gICAgICAyMjYsXG4gICAgICAxNTcsXG4gICAgICAxMDAsXG4gICAgICAyMjksXG4gICAgICAxNTAsXG4gICAgICAyNSxcbiAgICAgIDEzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjgsXG4gICAgICAzOCxcbiAgICAgIDE0LFxuICAgICAgMTY4LFxuICAgICAgMTUsXG4gICAgICA1NixcbiAgICAgIDE3LFxuICAgICAgODAsXG4gICAgICAxMixcbiAgICAgIDM1LFxuICAgICAgMjMxLFxuICAgICAgMjQsXG4gICAgICAxODAsXG4gICAgICA0NCxcbiAgICAgIDEzMSxcbiAgICAgIDE4NyxcbiAgICAgIDIyMixcbiAgICAgIDQ2LFxuICAgICAgMjA0LFxuICAgICAgMTMzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDS2pLNXI0Q0VObnZuN1VHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2SjNWeEx2cXZrTGd1YzRLRUNVTVVoUDNVbVUrVlUzTm9KYithWmd5cURvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdVK1BpdHFwdHcycmZlTXVQT05CVGptREowZVQyd0owcXppa3c5d3NMRWcwbzNwMWxveURQdHM3S21oRUxyN256aG95M1JHQWFHeHNLeG5FNUE1bERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkttM0lOdVpiSzVKQVRkSkpmTkZXeXExVEpTdW80bWNZVExHQjM4SzR5NHhGM0VXWTQ4ZG1BRTN5Y3VtTzJUWFlpVjN6VnYxYU9IU051c3ZXci92ZEN3PT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5MzExMTgwMzc6MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJsbMSxIPCdkJcuIPCdkKTwnZCyX2xleV/wnZ+RLiDwnZ+OIMSxbGzigalcIixcbiAgICBcImxpZFwiOiBcIjE0NTYyNTUzMDI1MzQxMzoxOEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjUwOTMxMTE4MDM3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDU4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyODM5OTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFGcmVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUZyZS5qc29uIjogIntcImtleURhdGFcIjpcInFsNGd6aGtNUkNNTDFTTGd3QzR5UUFDZXk2RmhNWEszT01VcG45NktLeW89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjY4NTc1MDE2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIyODQwMDIyMDlcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "•",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "☆xky_ley_3.0🖤🥷" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Xky-ley-MD",
  packname: process.env.PACK_NAME || "🖤",
  botname : process.env.BOT_NAME  || "xky-ley-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Ley",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
