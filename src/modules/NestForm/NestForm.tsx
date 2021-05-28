import "tetris-ui/dist/index.css";
import { Button } from "antd";
import React, { useEffect, useState } from "react";
import { TitleLayout, SimpleListTable, FilterBox } from "tetris-ui";

function mockRequest(page = 1, size = 10) {
  const data = [];
  for (let i = 0; i < size; i++) {
    data.push({
      id: `${page}_${i}`,
      name: `胡彦斌_${page}_${i}`,
      age: 60,
      address: "西湖区湖底公园1号",
    });
  }
  return { total: 1000, data };
}

const BraftEditorDemo: React.FC = () => {
  const [total, setTotal] = useState<number>(10);
  const [pageSize, setPageSize] = useState<number>(10);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataSource, setDataSource] = useState<any[]>([]);

  useEffect(() => {
    const { total, data } = mockRequest(currentPage, pageSize);
    setTotal(total);
    setDataSource(data);
  }, [pageSize, currentPage]);

  function search() {
    setCurrentPage(1);
  }

  function onPageChange(page: number) {
    setCurrentPage(page);
  }

  function onPageSizeChange(size: number) {
    setPageSize(size);
  }

  return (
    <TitleLayout
      title="自定义嵌套表单"
      renderTool={() => (
        <FilterBox>
          <Button type="primary" onClick={() => search()}>
            查 询
          </Button>
        </FilterBox>
      )}
    >
      <SimpleListTable
        rowkey="id"
        total={total}
        dataSource={dataSource}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={onPageChange}
        onPageSizeChange={onPageSizeChange}
        columns={[
          { title: "姓名", dataIndex: "name", key: "name" },
          { title: "年龄", dataIndex: "age", key: "age" },
          { title: "住址", dataIndex: "address", key: "address" },
        ]}
        expandable={{
          rowExpandable: (record: any) => record.age > 40,
          expandedRowRender: (record: any) => <p>{JSON.stringify(record)}</p>,
        }}
      ></SimpleListTable>
    </TitleLayout>
  );
};

export default BraftEditorDemo;
