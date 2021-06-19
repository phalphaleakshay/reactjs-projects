import React, { useState } from "react";
import "./Todo.css";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, deleteAllTodo } from "../../actions/index";
const Todo = () => {
	const [inputData, setInputData] = useState("");
	const list = useSelector(state => state.todoReducer.list);
	const dispatch = useDispatch();
	const isListNotEmpty = list && list.length > 0;
	return (
		<>
			<div className='main-div'>
				<div>
					<h3>
						<small className='text-muted'>My ToDo App</small>
					</h3>
				</div>

				<div class='input-group'>
					<input
						type='text'
						className='form-control'
						placeholder='Add items..'
						value={inputData}
						onChange={event => setInputData(event.target.value)}
					/>
					<span class='input-group-btn'>
						<button class='btn btn-outline-secondary' type='submit'>
							<i
								class='fa fa-solid fa-plus add-btn'
								onClick={() =>
									dispatch(addTodo(inputData, setInputData("")))
								}></i>
						</button>
					</span>
				</div>
				<br />
				<div className='row'>
					{list.map(item => {
						return (
							<div className='col-sm-6' id={item.id}>
								<div className='card'>
									<div className='card-body'>
										<h5 className='card-title'>{item.data}</h5>
										<button
											type='button'
											className='btn btn-outline-danger'
											onClick={() => dispatch(deleteTodo(item.id))}>
											Delete
										</button>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				<br />
				<div>
					{isListNotEmpty && (
						<button
							type='button'
							className='btn btn-outline-danger'
							onClick={() => dispatch(deleteAllTodo())}>
							Delete All
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default Todo;
