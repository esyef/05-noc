import { CronJob } from "cron";

type CronTime = string | Date
type OnTick = () => void

export class CronService {
    static createJob( cronTime: CronTime, onTick: OnTick) {
        // const job = new CronJob(
        //     '*/2 * * * * *', // cronTime
        //     function () {
        //         console.log('You will see this message every 2 second');
        //     }, // onTick
        //     null, // onComplete
        //     true, // start
        //     'America/Bogota' // timeZone
        // );

        const job = new CronJob(
            cronTime, onTick
        )

        job.start()
    }
}