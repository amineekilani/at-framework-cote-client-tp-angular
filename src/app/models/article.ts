export class Article {
    private _score: number=0;
    public get id(): number
    {
        return this._id;
    }
    public get description(): string
    {
        return this._description;
    }
    public set description(value: string)
    {
        this._description=value;
    }
    public get date(): string
    {
        return this._date;
    }
    public set date(value: string)
    {
        this._date=value;
    }
    public get url(): string
    {
        return this._url;
    }
    public set url(value: string)
    {
        this._url=value;
    }
    public get title(): string
    {
        return this._title;
    }
    public set title(value: string)
    {
        this._title=value;
    }
    public get score(): number
    {
        return this._score;
    }
    public set score(value: number)
    {
        this._score=value;
    }
    constructor (private _id: number,private _title: string,private _url: string,private _date: string,private _description: string){}
}