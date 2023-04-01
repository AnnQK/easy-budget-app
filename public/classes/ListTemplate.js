export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading) {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        h3.innerText = heading;
        li.append(h3);
        const p = document.createElement("p");
        p.innerText = item.format();
        li.append(p);
        this.container.append(li);
    }
}
