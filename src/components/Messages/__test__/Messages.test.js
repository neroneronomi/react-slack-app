import {render, screen} from '@testing-library/react';
import ContactList from '../ContactList';
import FindUserModal from '../FindUserModal';

// check pop up



test('renders pop up FindUserModal', () => {
    const {queryByTitle} = render(<FindUserModal />)
    const btn = queryByTitle("button");
    expect(btn).toBeTruthy;
});

test('closes pop up FindUserModal', () => {
    const {queryByTitle} = render(<FindUserModal />)
    const btn = queryByTitle("close");
    expect(btn).toBeTruthy;
});