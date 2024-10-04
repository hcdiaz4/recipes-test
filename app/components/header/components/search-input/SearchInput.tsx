import { TextField } from "@mui/material"

export const SearchInput = () => {

    return (
        <TextField
            id="outlined-basic"
            variant="outlined"
            slotProps={
                { input: { className: 'h-[40px]', placeholder: 'Buscar' } }
            }
        />
    )
}