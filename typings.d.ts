interface Board {
	columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "in-progress" | "done";

interface Column {
	id: TypedColumn;
	todos: Todo[];
}

interface Todo {
	$id: string;
	$createdAt: string;
	title: string;
	status: TypedColumn;
	image?: string;
}

interface Image {
	bucketId: string;
	fileId: string;
}
