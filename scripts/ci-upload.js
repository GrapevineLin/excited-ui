const axios = require('axios')
const dayjs = require('dayjs')
const config = require('../package.json')

    ; (async () => {
        try {
            const { version } = config
            const buildTime = dayjs().format('YYYY-MM-DD HH:mm:ss')
            const desc = `构建时间：${buildTime}`

            await sendMsgByWebhook({ version })
        } catch (e) {
            console.log(`===================脚本报错↓===================`)
            console.log(e)
            console.log(`===================脚本报错↑===================`)
            process.exit(-1)
        }
    })();

async function sendMsgByWebhook (msg) {
    const { version } = msg
    const WEBHOOK_KEY = process.env.WEBHOOK_KEY
    const { data: { errcode, errmsg } } = await axios.post(`https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=${WEBHOOK_KEY}`, {
        msgtype: "text",
        text: {
            "content": `构建ExcitedUI:${version}`,
            "mentioned_list": ["@all"],
            "mentioned_mobile_list": ["@all"]
        }
    })
    if (errcode === 0) {
        console.log('推送成功')
    } else {
        const errMsg = `推送失败：\ncode:${errcode}\nmsg:${errmsg}`
        throw errMsg
    }
}