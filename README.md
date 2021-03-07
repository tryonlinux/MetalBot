# telegram-metal-bot

Extremely Simple Telegram Bot to send metal prices daily to myself using NodeJS and Telegram/Metal-API web services.

## Requirements

- Axios >= **0.21.1**
- [Metals-Api Key](https://metals-api.com/) -- Free plan allows up to 50 hits per month
- [Telegram Bot and Channel](https://core.telegram.org/bots)

## Getting Started

To run simply clone and download code.

Then run the below line to install required packages.

```
npm i
```

Place the keys you get and your channel id in a keys.json file like so:

```
{
"botID": "bot*Bot API Key Here*",
"chatID": "-100*Channel ID Here*,
"metalAPIKey": "*metal API Key Here*"
}
```

## Usage

```
node index.js
```

## FAQ

### How do I get my channel ID for Telegram?

Check out this answer on [stackoverflow](https://stackoverflow.com/a/33862907/4712724)

## How do I set this up to send me prices automatically every morning?

I personally just use a cron job on my personal digital ocean droplet and schedule it to run everyday at 7am.

```
0 7 * * * node /path/to/file/index.js
```

## Authors

Jordan Tryon

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
