import nodemailer from 'nodemailer'

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "97d0282359af69",
        pass: "a7166d97b8b8c2"
    }
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendEmail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Vinicius Amorim <vinicius.cco10@gmail.com>',
            subject,
            html: body
        })
    }
}