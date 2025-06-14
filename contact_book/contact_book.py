import sys

contacts = []

def add_contact():
    name = input("Enter name: ").strip()
    phone = input("Enter phone number: ").strip()
    email = input("Enter email (optional): ").strip()
    address = input("Enter address (optional): ").strip()
    contact = {
        "name": name,
        "phone": phone,
        "email": email,
        "address": address
    }
    contacts.append(contact)
    print("Contact added!\n")

def display_contacts(filtered_contacts=None):
    use_contacts = filtered_contacts if filtered_contacts is not None else contacts
    if not use_contacts:
        print("No contacts found.\n")
    for idx, c in enumerate(use_contacts, start=1):
        print(f"{idx}) {c['name']} | {c['phone']}")
        if c['email']:
            print(f"   Email: {c['email']}")
        if c['address']:
            print(f"   Address: {c['address']}")
    print()

def search_contacts():
    term = input("Enter name or phone to search: ").strip().lower()
    filtered = [c for c in contacts if term in c['name'].lower() or term in c['phone']]
    display_contacts(filtered)

def update_contact():
    display_contacts()
    try:
        idx = int(input("Enter contact number to update: ").strip()) - 1
        if idx < 0 or idx >= len(contacts):
            print("Invalid contact number.\n")
            return
        c = contacts[idx]
        print("Press enter to keep current value.")
        name = input(f"New name [{c['name']}]: ").strip() or c['name']
        phone = input(f"New phone [{c['phone']}]: ").strip() or c['phone']
        email = input(f"New email [{c['email']}]: ").strip() or c['email']
        address = input(f"New address [{c['address']}]: ").strip() or c['address']
        contacts[idx] = {"name": name, "phone": phone, "email": email, "address": address}
        print("Contact updated!\n")
    except ValueError:
        print("Invalid input. Please enter a number.\n")

def delete_contact():
    display_contacts()
    try:
        idx = int(input("Enter contact number to delete: ").strip()) - 1
        if idx < 0 or idx >= len(contacts):
            print("Invalid contact number.\n")
            return
        del contacts[idx]
        print("Contact deleted!\n")
    except ValueError:
        print("Invalid input. Please enter a number.\n")

def main():
    while True:
        print("Contact Book")
        print("1. Add Contact")
        print("2. View Contacts")
        print("3. Search Contact")
        print("4. Update Contact")
        print("5. Delete Contact")
        print("6. Exit")
        choice = input("Select an option: ").strip()
        if choice == "1":
            add_contact()
        elif choice == "2":
            display_contacts()
        elif choice == "3":
            search_contacts()
        elif choice == "4":
            update_contact()
        elif choice == "5":
            delete_contact()
        elif choice == "6":
            print("Goodbye!")
            sys.exit()
        else:
            print("Invalid option. Please try again.\n")

if __name__ == "__main__":
    main()
