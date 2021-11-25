/// <reference types="react-scripts" />

interface IDataItem {
    id: string
    name: string
    spend: number
    BCAP1: string
    BCAP2: string
    BCAP3: string
}

type TDataItems = IDataItem[];

type TNavigation = {
    data: TDataItems,
    onSelect: any
}

type TSlider = {
    data: TDataItems,
    onChange: any
}

// Enums maybe for BCAP
