import { SyncedThread } from "./SyncedThread";

type ThreadType = {
    threadName: string;
    thread: SyncedThread;
};

export class Threads {
    private static threads: ThreadType[] = [];

    static async getOrCreateThread(threadName: string): Promise<SyncedThread> {
        if (this.threads.some(x => x.threadName == threadName))
            return (this.threads.find(x => x.threadName == threadName) as ThreadType).thread;
        var thread = await SyncedThread.init(threadName);
        this.threads.push({ threadName, thread });
        return thread;
    }

    async getOrCreateThread(threadName: string): Promise<SyncedThread> {
        return await Threads.getOrCreateThread(threadName);
    }
}
