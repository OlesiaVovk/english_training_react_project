import React, { useState, useContext } from "react";
import { TrashIcon, PencilIcon } from "@primer/octicons-react";
import { Table, Input, Popconfirm, Form, Typography } from "antd";
import { Context } from "../Context/Context";

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `Пожалуйста заполните поле ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};

const EditableTable = () => {
  const { englishWords, deleteWord, addWord, editWord, setEnglishWords } =
    useContext(Context);
  const [form] = Form.useForm();
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      english: "",
      transcription: "",
      russian: "",
      tags: "",
      ...record,
    });
    setEditingKey(record.id);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const editedRow = await form.validateFields();
      const newData = [...englishWords];
      const index = newData.findIndex((item) => key === item.id);

      for (let field in editedRow) {
        if (editedRow[field].match(/^[0-9]+$/i)) {
          throw new Error("Введенные значения не могут быть цифрами");
        }
      }
      if (key === null) {
        addWord(editedRow);
      } else {
        editWord(editedRow, index);
      }
      setEditingKey("");
    } catch (errInfo) {
      alert(errInfo);
      console.log("Validate Failed:", errInfo);
    }
  };

  const handleAdd = () => {
    const newData = [...englishWords];
    newData.push({
      english: "",
      transcription: "",
      russian: "",
      tags: "",
      tags_json: "[]",
      id: null,
    });
    setEnglishWords(newData);
    form.setFieldsValue({
      english: "",
      transcription: "",
      russian: "",
      tags: "",
    });
    setEditingKey(null);
  };

  const columns = [
    {
      title: "English",
      dataIndex: "english",
      width: "20vw",
      editable: true,
    },
    {
      title: "Transcription",
      dataIndex: "transcription",
      width: "20vw",
      editable: true,
    },
    {
      title: "Russian",
      dataIndex: "russian",
      width: "20vw",
      editable: true,
    },
    {
      title: "Tags",
      dataIndex: "tags",
      width: "15vw",
      editable: true,
    },
    {
      title: "Edit",
      dataIndex: "operation",
      width: "10vw",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <button className="cancelButton">Cancel</button>
            </Popconfirm>
          </span>
        ) : (
          <Typography.Link
            disabled={editingKey !== ""}
            onClick={() => edit(record)}
          >
            <PencilIcon size={24} className="pencilIcon" />
          </Typography.Link>
        );
      },
    },
    {
      title: "Delete",
      dataIndex: "operation",
      width: "5vw",
      render: (_, record) =>
        englishWords.length >= 1 ? (
          <Popconfirm
            title="Sure to delete?"
            onConfirm={() => deleteWord(record.id)}
          >
            <button className="trashIcon">
              <TrashIcon size={24} />
            </button>
          </Popconfirm>
        ) : null,
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <>
      <Form form={form} component={false} className="form">
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          bordered
          dataSource={englishWords}
          rowKey="id"
          columns={mergedColumns}
          rowClassName="editable-row"
          pagination={{
            onChange: cancel,
          }}
        />
        <button className="addNewRow" onClick={handleAdd}>
          Добавить новое слово
        </button>
      </Form>
    </>
  );
};

export default EditableTable;
