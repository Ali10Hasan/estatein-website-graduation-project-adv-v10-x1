import type { ReactNode } from "react";

interface DataTableColumn<T> {
    header: string;
    className?: string;
    render: (item: T) => ReactNode;
}

interface DataTableProps<T> {
    // T يمثل نوع البيانات التي سيستقبلها الجدول
    // لذلك يمكن استخدام نفس DataTable مع FAQ أو Property أو Testimonial
    data: T[];
    columns: DataTableColumn<T>[];

    // دالة تحدد ال id لكل عنصر في الجدول
    getRowKey: (item: T) => string;
    emptyMessage?: string;
    renderExtraRow?: (item: T) => ReactNode;
}

// <T,> لأن TypeScript يمكن ان يفسر <T> على انها HTML tag
const DataTable = <T,>({
    data,
    columns,
    getRowKey,
    emptyMessage = "No data found."
}: DataTableProps<T>) => {
    return (
        <div className="w-full overflow-x-auto rounded-xl border border-grey-15 light:border-white-90">

            <table className="w-full min-w-800  border-collapse">

                {/* Header */}

                <thead className="bg-grey-10 light:bg-white-95">
                    <tr className="border-b border-grey-15 light:border-white-90 text-left">

                        {columns.map((column) => (
                            <th
                                key={column.header}
                                className={`
                                    px-20
                                    py-18
                                    text-14
                                    font-medium
                                    text-white-90 light:text-grey-20
                                    ${column.className ?? ""}
                                `}
                            >
                                {column.header}
                            </th>
                        ))}

                    </tr>
                </thead>

                {/* Body */}

                <tbody>

                    {data.map((item) => (
                        <tr
                            key={getRowKey(item)}
                            className="
                                border-b
                                border-grey-15 light:border-white-90
                                last:border-b-0
                                transition-colors
                                hover:bg-grey-08 light:hover:bg-white-99
                            "
                        >

                            {columns.map((column) => (
                                <td
                                    key={column.header}
                                    className="px-20 py-20 align-top"
                                >
                                    {column.render(item)}
                                </td>
                            ))}

                        </tr>
                    ))}

                    {/* Empty state */}

                    {data.length === 0 && (
                        <tr>

                            <td
                                colSpan={columns.length}
                                className="px-20 py-60 text-center text-16 text-white-90 light:text-grey-20"
                            >
                                {emptyMessage}
                            </td>

                        </tr>
                    )}

                </tbody>

            </table>

        </div>
    );
};

export default DataTable;