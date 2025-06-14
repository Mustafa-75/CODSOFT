import tkinter as tk
from tkinter import ttk, messagebox

def calculate():
    try:
        a = float(entry_num1.get())
        b = float(entry_num2.get())
        op = operation_var.get()
        if op == "add":
            res = a + b
        elif op == "subtract":
            res = a - b
        elif op == "multiply":
            res = a * b
        elif op == "divide":
            if b == 0:
                result_var.set("Error: Division by zero")
                messagebox.showerror("Math Error", "Cannot divide by zero.")
                return
            res = a / b
        else:
            res = ""
        result_var.set(f"Result: {res}")
    except ValueError:
        result_var.set("Please enter valid numbers")
        messagebox.showerror("Input Error", "Please enter valid numbers.")

root = tk.Tk()
root.title("Simple Calculator")

mainframe = ttk.Frame(root, padding="20")
mainframe.grid(row=0, column=0)

tk.Label(mainframe, text="First number:").grid(row=0, column=0, sticky="w")
entry_num1 = ttk.Entry(mainframe, width=20)
entry_num1.grid(row=0, column=1)

tk.Label(mainframe, text="Second number:").grid(row=1, column=0, sticky="w")
entry_num2 = ttk.Entry(mainframe, width=20)
entry_num2.grid(row=1, column=1)

tk.Label(mainframe, text="Operation:").grid(row=2, column=0, sticky="w")
operation_var = tk.StringVar(value="add")
operation_menu = ttk.Combobox(
    mainframe, textvariable=operation_var, state="readonly",
    values=[
        ("add"), 
        ("subtract"), 
        ("multiply"), 
        ("divide")]
)
operation_menu.grid(row=2, column=1)
operation_menu.current(0)

ttk.Button(mainframe, text="Calculate", command=calculate).grid(row=3, column=0, columnspan=2, pady=10)

result_var = tk.StringVar(value="Enter numbers and select operation.")
result_label = tk.Label(mainframe, textvariable=result_var, font=("Arial", 12, "bold"))
result_label.grid(row=4, column=0, columnspan=2, pady=6)

root.mainloop()