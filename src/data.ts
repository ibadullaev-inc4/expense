export enum ReportType {
    INCOME = "income",
    EXPENSE = "expense"
}

export const data: Data = {
    report: [{
        id: "12046d0d-b314-4351-9b7b-f2bd3cbcac2c",
        source: "Salary",
        amount: 800,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME
    }, 
    {
        id: "12046d0d-b314-4351-9b7b-f2bd3cbcac2d",
        source: "YouTube",
        amount: 3000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.INCOME
    },
    {
        id: "12046d0d-b314-4351-9b7b-f2bd3cbcac2s",
        source: "Facebook",
        amount: 1000,
        created_at: new Date(),
        updated_at: new Date(),
        type: ReportType.EXPENSE
    }]
}

interface Data {
    report: {
        id: string
        source: string
        amount: number
        created_at: Date
        updated_at: Date
        type: ReportType
    } []
}

