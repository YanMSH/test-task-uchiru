export default class localStorageUtils {
    public static fav: string = 'favourites';

    static get(key: string): string[] {
        return JSON.parse(localStorage.getItem(key) as string);
    }

    static set(key: string, value: string[]) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static inStore(key: string): boolean {
        return !!localStorage.getItem(key);
    }

    static isFavourite(id: string): boolean {
        return this.get(this.fav).includes(id);
    }

    static toggleFavourite(id: string): void {
        if (this.inStore(this.fav)) {
            if (this.isFavourite(id)) {
                this.set(this.fav, this.get(this.fav).filter((item: string) => {
                    return item !== id;
                }))
            } else {
                this.set(this.fav, this.get(this.fav).concat(id));
            }
        } else {
            this.set(this.fav, [id]);
        }
    }
}