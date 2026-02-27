'use client';

import { useMemo, useState } from 'react';

type Column = {
  key: string;
  label: string;
  type?: 'text' | 'number' | 'date';
};

export function EditableGrid({
  title,
  columns,
  initialRows,
}: {
  title: string;
  columns: Column[];
  initialRows: Record<string, string>[];
}) {
  const [rows, setRows] = useState<Record<string, string>[]>(initialRows);

  const totals = useMemo(() => {
    const numberCols = columns.filter((c) => c.type === 'number').map((c) => c.key);
    return numberCols.reduce<Record<string, number>>((acc, key) => {
      acc[key] = rows.reduce((sum, row) => sum + (Number(row[key]) || 0), 0);
      return acc;
    }, {});
  }, [columns, rows]);

  const updateCell = (idx: number, key: string, value: string) => {
    setRows((prev) => prev.map((row, i) => (i === idx ? { ...row, [key]: value } : row)));
  };

  const addRow = () => {
    const empty = columns.reduce<Record<string, string>>((acc, c) => {
      acc[c.key] = '';
      return acc;
    }, {});
    setRows((prev) => [...prev, empty]);
  };

  const removeRow = (idx: number) => setRows((prev) => prev.filter((_, i) => i !== idx));

  return (
    <section className="card table-wrap" style={{ marginBottom: 14 }}>
      <h3>{title}</h3>
      <div className="toolbar">
        <button className="btn" onClick={addRow} type="button">
          + Row
        </button>
      </div>
      <table className="table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.label}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {columns.map((col) => (
                <td key={col.key}>
                  <input
                    type={col.type === 'number' ? 'number' : col.type === 'date' ? 'date' : 'text'}
                    value={row[col.key] ?? ''}
                    onChange={(e) => updateCell(idx, col.key, e.target.value)}
                  />
                </td>
              ))}
              <td>
                <button className="btn" type="button" onClick={() => removeRow(idx)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            {columns.map((col) => (
              <td key={col.key}>
                {col.type === 'number' ? <strong>{totals[col.key]?.toFixed(2) ?? '0.00'}</strong> : null}
              </td>
            ))}
            <td />
          </tr>
        </tfoot>
      </table>
    </section>
  );
}
