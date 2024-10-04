'use client';

import { Button, Menu, MenuItem } from "@mui/material";
import ListIcon from '@mui/icons-material/List';
import { useState } from "react";

type ButtonProps = {
    changeHandler: (difficulty: string) => void;
};

export const Sidebar = ({ changeHandler }: ButtonProps) => {

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (difficulty: string) => {
        setAnchorEl(null);
        changeHandler(difficulty);
    };
    return (
        <>
            <div className="mb-4">
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    variant='contained'
                    endIcon={<ListIcon />}
                    className="Button"
                >
                    Recipe difficulty
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    // onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={() => handleClose('All')}>All recipes</MenuItem>
                    <MenuItem onClick={() => handleClose('Easy')}>Easy recipes</MenuItem>
                    <MenuItem onClick={() => handleClose('Medium')}>Medium recipes</MenuItem>
                    <MenuItem onClick={() => handleClose('Hard')}>Hard recipes</MenuItem>
                </Menu>
            </div>
        </>
    )
}