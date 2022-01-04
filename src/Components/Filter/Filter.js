import React from 'react'
import "./Filter.css";
import { List, Divider, ListItem, ListItemText, ListSubheader, Checkbox } from '@mui/material'
import { Col, Row } from 'react-bootstrap'
export default function Filter() {
    const [checked, setChecked] = React.useState([0]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };
    const BrandArray = ["Tommy Hilfiger",
        "Luxure by Louis Philippe",
        "Louis Philippe",
        "GANT",
        "RARE RABBIT"]

    const PriceArray = ["Rs. 219 to Rs. 3414",
        "Rs. 3414 to Rs. 6609",
        "Rs. 6609 to Rs. 9804",
        "Rs. 9804 to Rs. 12999",]

    const DiscountArray = ["10", "20", "30", "40", "50", "60"]

    return (
        <div>
            <Row>
                <Col lg={12} className='filterHead-col'>
                    <h1 className='Filter-head'>Filters</h1>

                </Col>
            </Row>
            <Divider />

            <Row>
                <Col lg={12} className='filterItem-col'>
                    <List>
                        <ListItem>

                            <List sx={{ width: '100%', maxWidth: 360 }} subheader={
                                <ListSubheader component="div" className="FilterItem">
                                    Brand
                                </ListSubheader>
                            }>
                                {BrandArray.map((value) => {
                                    const labelId = `checkbox-list-label-${value}`;

                                    return (
                                        <ListItem
                                            key={value}

                                            disablePadding
                                        >

                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                                onClick={handleToggle(value)}
                                                color='default'
                                                size='0.5px'
                                            />

                                            <ListItemText disableTypography className="NestItem" id={labelId} primary={value} />

                                        </ListItem>
                                    );
                                })}
                            </List>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <List sx={{ width: '100%', maxWidth: 360 }} subheader={
                                <ListSubheader component="div" className="FilterItem">
                                    Price
                                </ListSubheader>
                            }>
                                {PriceArray.map((value) => {
                                    const labelId = `checkbox-list-label-${value}`;

                                    return (
                                        <ListItem
                                            key={value}

                                            disablePadding
                                        >

                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                                onClick={handleToggle(value)}
                                                color='default'
                                                size='0.5px'
                                            />

                                            <ListItemText disableTypography className="NestItem" id={labelId} primary={value} />

                                        </ListItem>
                                    );
                                })}
                            </List>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <List sx={{ width: '100%', maxWidth: 360 }} subheader={
                                <ListSubheader component="div" className="FilterItem">
                                    Discount Range
                                </ListSubheader>
                            }>
                                {DiscountArray.map((value) => {
                                    const labelId = `checkbox-list-label-${value}`;

                                    return (
                                        <ListItem
                                            key={value}

                                            disablePadding
                                        >

                                            <Checkbox
                                                edge="start"
                                                checked={checked.indexOf(value) !== -1}
                                                tabIndex={-1}
                                                disableRipple
                                                inputProps={{ 'aria-labelledby': labelId }}
                                                onClick={handleToggle(value)}
                                                color='default'
                                                size='0.5px'
                                            />

                                            <ListItemText disableTypography className="NestItem" id={labelId} primary={`${value}% and Above`} />

                                        </ListItem>
                                    );
                                })}
                            </List>
                        </ListItem>
                    </List>
                </Col>
            </Row>



        </div>
    )
}
