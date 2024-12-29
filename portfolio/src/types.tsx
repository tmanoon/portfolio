export type Project = {
    name: string,
    desc: string,
    link: string
}

export type Field = {
    name: string,
    label: string
    placeholder: string
}

export type Stack = {
    [key: string]: string[];
}