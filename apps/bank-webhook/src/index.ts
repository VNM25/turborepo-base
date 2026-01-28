
import express from "express";
import db from "@repo/db";
const app = express();

app.use(express.json());

app.get("/", (req: any, res: any) => {
    res.send("ok");
});

app.post("/bankWebhook", async (req: any, res: any) => {
    const paymentInfo = {
        token: req.body.token,
        amount: req.body.amount,
        currency: req.body.currency,
        status: req.body.status,
        reference: req.body.reference,
        metadata: req.body.metadata,
    }

    try {
        db.$transaction([
            db.balance.update({
                where: {
                    userId: paymentInfo.metadata.userId
                },
                data: {
                    amount: {
                        increment: Number(paymentInfo.amount)
                    }
                }
            }),
            db.onRampTransaction.update({
                where: {
                    token: paymentInfo.token
                },
                data: {
                    status: paymentInfo.status
                }
            })
        ])
    } catch (e) {
        res.status(500).json({
            message: "Internal Server Error"
        })
        console.log(e);
        return;
    }

    console.log(paymentInfo);
    res.status(200).json({
        message: "captured"
    })
});

app.listen(3002, () => {
    console.log("Server started on port 3002");
}); 
