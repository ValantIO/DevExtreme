import {
    DxElement,
} from '../core/element';

import {
    Cancelable,
    NativeEventInfo,
    EventInfo,
    InitializedEventInfo,
    ChangedOptionInfo,
} from '../events/index';

import PivotGridDataSource, {
    Field,
    Options as PivotGridDataSourceOptions,
    dxPivotGridSummaryCell as SummaryCell,
} from './pivot_grid/data_source';

import dxPopup from './popup';

import Widget, {
    WidgetOptions,
} from './widget/ui.widget';

/** @public */
export type CellClickEvent = Cancelable & NativeEventInfo<dxPivotGrid> & {
    readonly area?: string;
    readonly cellElement?: DxElement;
    readonly cell?: Cell;
    readonly rowIndex?: number;
    readonly columnIndex?: number;
    readonly columnFields?: Array<Field>;
    readonly rowFields?: Array<Field>;
    readonly dataFields?: Array<Field>;
};

/** @public */
export type CellPreparedEvent = EventInfo<dxPivotGrid> & {
    readonly area?: string;
    readonly cellElement?: DxElement;
    readonly cell?: Cell;
    readonly rowIndex?: number;
    readonly columnIndex?: number;
};

/** @public */
export type ContentReadyEvent = EventInfo<dxPivotGrid>;

/** @public */
export type ContextMenuPreparingEvent = EventInfo<dxPivotGrid> & {
    readonly area?: string;
    readonly cell?: Cell;
    readonly cellElement?: DxElement;
    readonly columnIndex?: number;
    readonly rowIndex?: number;
    readonly dataFields?: Array<Field>;
    readonly rowFields?: Array<Field>;
    readonly columnFields?: Array<Field>;
    readonly field?: Field;
    items?: Array<any>;
};

/** @public */
export type DisposingEvent = EventInfo<dxPivotGrid>;

/** @public */
export type ExportedEvent = EventInfo<dxPivotGrid>;

/** @public */
export type ExportingEvent = Cancelable & EventInfo<dxPivotGrid> & {
    fileName?: string;
};

/** @public */
export type FileSavingEvent = Cancelable & {
    readonly component: dxPivotGrid;
    readonly element: DxElement;
    readonly data?: Blob;
    readonly format?: string;
    fileName?: string;
};

/** @public */
export type InitializedEvent = InitializedEventInfo<dxPivotGrid>;

/** @public */
export type OptionChangedEvent = EventInfo<dxPivotGrid> & ChangedOptionInfo;

/**
 * @deprecated use Properties instead
 * @namespace DevExpress.ui
 */
export interface dxPivotGridOptions extends WidgetOptions<dxPivotGrid> {
    /**
     * @docid
     * @default false
     * @public
     */
    allowExpandAll?: boolean;
    /**
     * @docid
     * @default false
     * @public
     */
    allowFiltering?: boolean;
    /**
     * @docid
     * @default false
     * @public
     */
    allowSorting?: boolean;
    /**
     * @docid
     * @default false
     * @public
     */
    allowSortingBySummary?: boolean;
    /**
     * @docid
     * @type Enums.PivotGridDataFieldArea
     * @default "column"
     * @public
     */
    dataFieldArea?: 'column' | 'row';
    /**
     * @docid
     * @default null
     * @public
     */
    dataSource?: Array<any> | PivotGridDataSource | PivotGridDataSourceOptions;
    /**
     * @docid
     * @default true
     * @public
     */
    encodeHtml?: boolean;
    /**
     * @docid
     * @public
     */
    export?: {
      /**
       * @docid
       * @default false
       */
      enabled?: boolean;
      /**
       * @docid
       * @default "PivotGrid"
       * @deprecated
       */
      fileName?: string;
      /**
       * @docid
       * @default true
       * @deprecated
       */
      ignoreExcelErrors?: boolean;
      /**
       * @docid
       * @default undefined
       * @deprecated
       */
      proxyUrl?: string;
    };
    /**
     * @docid
     * @public
     */
    fieldChooser?: {
      /**
       * @docid
       * @default false
       */
      allowSearch?: boolean;
      /**
       * @docid
       * @type Enums.ApplyChangesMode
       * @default "instantly"
       */
      applyChangesMode?: 'instantly' | 'onDemand';
      /**
       * @docid
       * @default true
       */
      enabled?: boolean;
      /**
       * @docid
       * @default 600
       */
      height?: number;
      /**
       * @docid
       * @type Enums.PivotGridFieldChooserLayout
       * @default 0
       */
      layout?: 0 | 1 | 2;
      /**
       * @docid
       * @default 500
       */
      searchTimeout?: number;
      /**
       * @docid
       */
      texts?: {
        /**
         * @docid
         * @default 'All Fields'
         */
        allFields?: string;
        /**
         * @docid
         * @default 'Column Fields'
         */
        columnFields?: string;
        /**
         * @docid
         * @default 'Data Fields'
         */
        dataFields?: string;
        /**
         * @docid
         * @default 'Filter Fields'
         */
        filterFields?: string;
        /**
         * @docid
         * @default 'Row Fields'
         */
        rowFields?: string;
      };
      /**
       * @docid
       * @default "Field Chooser"
       */
      title?: string;
      /**
       * @docid
       * @default 600
       */
      width?: number;
    };
    /**
     * @docid
     * @public
     */
    fieldPanel?: {
      /**
       * @docid
       * @default true
       */
      allowFieldDragging?: boolean;
      /**
       * @docid
       * @default true
       */
      showColumnFields?: boolean;
      /**
       * @docid
       * @default true
       */
      showDataFields?: boolean;
      /**
       * @docid
       * @default true
       */
      showFilterFields?: boolean;
      /**
      * @docid
      * @default true
      */
      showRowFields?: boolean;
      /**
       * @docid
       */
      texts?: {
        /**
         * @docid
         * @default "Drop Column Fields Here"
         */
        columnFieldArea?: string;
        /**
         * @docid
         * @default "Drop Data Fields Here"
         */
        dataFieldArea?: string;
        /**
         * @docid
         * @default "Drop Filter Fields Here"
         */
        filterFieldArea?: string;
        /**
         * @docid
         * @default "Drop Row Fields Here"
         */
        rowFieldArea?: string;
      };
      /**
       * @docid
       * @default false
       */
      visible?: boolean;
    };
    /**
     * @docid
     * @public
     */
    headerFilter?: {
      /**
       * @docid
       * @default false
       */
      allowSearch?: boolean;
      /**
       * @docid
       * @default 325
       */
      height?: number;
      /**
       * @docid
       * @default 500
       */
      searchTimeout?: number;
      /**
       * @docid
       * @default false
       */
      showRelevantValues?: boolean;
      /**
       * @docid
       */
      texts?: {
        /**
         * @docid
         * @default "Cancel"
         */
        cancel?: string;
        /**
         * @docid
         * @default "(Blanks)"
         */
        emptyValue?: string;
        /**
         * @docid
         * @default "Ok"
         */
        ok?: string;
      };
      /**
       * @docid
       * @default 252
       */
      width?: number;
    };
    /**
     * @docid
     * @default true
     * @public
     */
    hideEmptySummaryCells?: boolean;
    /**
     * @docid
     * @public
     */
    loadPanel?: {
      /**
       * @docid
       * @default true
       */
      enabled?: boolean;
      /**
       * @docid
       * @default 70
       */
      height?: number;
      /**
       * @docid
       * @default ""
       */
      indicatorSrc?: string;
      /**
       * @docid
       * @default false
       */
      shading?: boolean;
      /**
       * @docid
       * @default ''
       */
      shadingColor?: string;
      /**
       * @docid
       * @default true
       */
      showIndicator?: boolean;
      /**
       * @docid
       * @default true
       */
      showPane?: boolean;
      /**
       * @docid
       * @default 'Loading...'
       */
      text?: string;
      /**
       * @docid
       * @default 200
       */
      width?: number;
    };
    /**
     * @docid
     * @type_function_param1 e:Object
     * @type_function_param1_field4 area:string
     * @type_function_param1_field5 cellElement:DxElement
     * @type_function_param1_field6 cell:dxPivotGridPivotGridCell
     * @type_function_param1_field7 rowIndex:number
     * @type_function_param1_field8 columnIndex:number
     * @type_function_param1_field9 columnFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field10 rowFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field11 dataFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field12 event:event
     * @type_function_param1_field13 cancel:boolean
     * @default null
     * @type_function_param1_field1 component:dxPivotGrid
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onCellClick?: ((e: CellClickEvent) => void);
    /**
     * @docid
     * @type_function_param1 e:object
     * @type_function_param1_field4 area:string
     * @type_function_param1_field5 cellElement:DxElement
     * @type_function_param1_field6 cell:dxPivotGridPivotGridCell
     * @type_function_param1_field7 rowIndex:number
     * @type_function_param1_field8 columnIndex:number
     * @default null
     * @type_function_param1_field1 component:dxPivotGrid
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onCellPrepared?: ((e: CellPreparedEvent) => void);
    /**
     * @docid
     * @type_function_param1 e:Object
     * @type_function_param1_field4 items:Array<Object>
     * @type_function_param1_field5 area:string
     * @type_function_param1_field6 cell:dxPivotGridPivotGridCell
     * @type_function_param1_field7 cellElement:DxElement
     * @type_function_param1_field8 columnIndex:number
     * @type_function_param1_field9 rowIndex:number
     * @type_function_param1_field10 dataFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field11 rowFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field12 columnFields:Array<PivotGridDataSourceOptions.fields>
     * @type_function_param1_field13 field:PivotGridDataSourceOptions.fields
     * @default null
     * @type_function_param1_field1 component:dxPivotGrid
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onContextMenuPreparing?: ((e: ContextMenuPreparingEvent) => void);
    /**
     * @docid
     * @default null
     * @type_function_param1 e:object
     * @type_function_param1_field1 component:dxPivotGrid
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     * @deprecated
     */
    onExported?: ((e: ExportedEvent) => void);
    /**
     * @docid
     * @type_function_param1 e:object
     * @type_function_param1_field4 fileName:string
     * @type_function_param1_field5 cancel:boolean
     * @default null
     * @type_function_param1_field1 component:dxPivotGrid
     * @type_function_param1_field2 element:DxElement
     * @type_function_param1_field3 model:any
     * @action
     * @public
     */
    onExporting?: ((e: ExportingEvent) => void);
    /**
     * @docid
     * @type_function_param1 e:object
     * @type_function_param1_field3 fileName:string
     * @type_function_param1_field4 format:string
     * @type_function_param1_field5 data:BLOB
     * @type_function_param1_field6 cancel:boolean
     * @default null
     * @type_function_param1_field1 component:dxPivotGrid
     * @type_function_param1_field2 element:DxElement
     * @action
     * @public
     * @deprecated
     */
    onFileSaving?: ((e: FileSavingEvent) => void);
    /**
     * @docid
     * @type Enums.PivotGridRowHeadersLayout
     * @default "standard"
     * @public
     */
    rowHeaderLayout?: 'standard' | 'tree';
    /**
     * @docid
     * @public
     */
    scrolling?: {
      /**
       * @docid
       * @type Enums.PivotGridScrollingMode
       * @default "standard"
       */
      mode?: 'standard' | 'virtual';
      /**
       * @docid
       * @type boolean|Enums.Mode
       * @default "auto"
       */
      useNative?: boolean | 'auto';
    };
    /**
     * @docid
     * @default false
     * @public
     */
    showBorders?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    showColumnGrandTotals?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    showColumnTotals?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    showRowGrandTotals?: boolean;
    /**
     * @docid
     * @default true
     * @public
     */
    showRowTotals?: boolean;
    /**
     * @docid
     * @type Enums.PivotGridTotalsDisplayMode
     * @default "none"
     * @public
     */
    showTotalsPrior?: 'both' | 'columns' | 'none' | 'rows';
    /**
     * @docid
     * @public
     */
    stateStoring?: {
      /**
       * @docid
       * @type_function_return Promise<Object>
       */
      customLoad?: (() => PromiseLike<any>);
      /**
       * @docid
       * @type_function_param1 state:object
       * @type_function_return void
       */
      customSave?: ((state: any) => any);
      /**
       * @docid
       * @default false
       */
      enabled?: boolean;
      /**
       * @docid
       * @default 2000
       */
      savingTimeout?: number;
      /**
       * @docid
       * @default null
       */
      storageKey?: string;
      /**
       * @docid
       * @type Enums.StateStoringType
       * @default "localStorage"
       */
      type?: 'custom' | 'localStorage' | 'sessionStorage';
    };
    /**
     * @docid
     * @public
     */
    texts?: {
      /**
       * @docid
       * @default 'Collapse All'
       */
      collapseAll?: string;
      /**
       * @docid
       * @default "N/A"
       */
      dataNotAvailable?: string;
      /**
       * @docid
       * @default 'Expand All'
       */
      expandAll?: string;
      /**
       * @docid
       * @default "Export to Excel file"
       */
      exportToExcel?: string;
      /**
       * @docid
       * @default 'Grand Total'
       */
      grandTotal?: string;
      /**
       * @docid
       * @default 'No data'
       */
      noData?: string;
      /**
       * @docid
       * @default 'Remove All Sorting'
       */
      removeAllSorting?: string;
      /**
       * @docid
       * @default 'Show Field Chooser'
       */
      showFieldChooser?: string;
      /**
       * @docid
       * @default 'Sort {0} by This Column'
       */
      sortColumnBySummary?: string;
      /**
       * @docid
       * @default 'Sort {0} by This Row'
       */
      sortRowBySummary?: string;
      /**
       * @docid
       * @default '{0} Total'
       */
      total?: string;
    };
    /**
     * @docid
     * @default true
     * @public
     */
    wordWrapEnabled?: boolean;
}
/**
 * @docid
 * @inherits Widget
 * @namespace DevExpress.ui
 * @public
 */
export default class dxPivotGrid extends Widget<dxPivotGridOptions> {
    /**
     * @docid
     * @publicName bindChart(chart, integrationOptions)
     * @param1 chart:string|jQuery|object
     * @param2_field5 processCell:function(cellData)
     * @param2_field6 customizeChart:function(chartOptions)
     * @param2_field7 customizeSeries:function(seriesName, seriesOptions)
     * @return function | null
     * @public
     */
    bindChart(chart: string | DxElement | any, integrationOptions: { inverted?: boolean; dataFieldsDisplayMode?: string; putDataFieldsInto?: string; alternateDataFields?: boolean; processCell?: Function; customizeChart?: Function; customizeSeries?: Function }): Function & null;
    /**
     * @docid
     * @publicName exportToExcel()
     * @deprecated excelExporter.exportPivotGrid
     * @public
     */
    exportToExcel(): void;
    /**
     * @docid
     * @publicName getDataSource()
     * @public
     */
    getDataSource(): PivotGridDataSource;
    /**
     * @docid
     * @publicName getFieldChooserPopup()
     * @public
     */
    getFieldChooserPopup(): dxPopup;
    /**
     * @docid
     * @publicName updateDimensions()
     * @public
     */
    updateDimensions(): void;
}

/**
 * @public
 * @namespace DevExpress.ui.dxPivotGrid
 */
export type Cell = dxPivotGridPivotGridCell;

/**
 * @namespace DevExpress.ui
 * @deprecated Use Cell instead
 */
export interface dxPivotGridPivotGridCell {
    /**
     * @docid
     * @public
     */
    columnPath?: Array<string | number | Date>;
    /**
     * @docid
     * @acceptValues "D" | "T" | "GT"
     * @public
     */
    columnType?: 'D' | 'T' | 'GT';
    /**
     * @docid
     * @public
     */
    dataIndex?: number;
    /**
     * @docid
     * @public
     */
    expanded?: boolean;
    /**
     * @docid
     * @public
     */
    path?: Array<string | number | Date>;
    /**
     * @docid
     * @public
     */
    rowPath?: Array<string | number | Date>;
    /**
     * @docid
     * @acceptValues "D" | "T" | "GT"
     * @public
     */
    rowType?: 'D' | 'T' | 'GT';
    /**
     * @docid
     * @public
     */
    text?: string;
    /**
     * @docid
     * @acceptValues "D" | "T" | "GT"
     * @public
     */
    type?: 'D' | 'T' | 'GT';
    /**
     * @docid
     * @public
     */
    value?: any;
}

export type dxPivotGridSummaryCell = SummaryCell;

/** @public */
export type Properties = dxPivotGridOptions;

/** @deprecated use Properties instead */
export type Options = dxPivotGridOptions;
