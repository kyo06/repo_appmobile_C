import React from "react";

const TabComponent = () => {
  return(
  <> <form onSubmit={handleSubmit}>
  <Tabs defaultActiveKey="aller" transition={false} id="tab">
       
    <Tab eventKey="aller" title="Aller">
       <FormGroup   onChange={handleChange} name="aller">
          { allerList.map((v) => (<List vol={v} key={v.id} name="aller" />))}
       </FormGroup>
    </Tab>
    <Tab eventKey="retour" title="Retour">
      <Form.Control as="select"  htmlSize={allerList.length} onChange={handleChange} name="retour">
            { retourList.map((v) => (<List vol={v} key={v.id} name="retour" />))}
      </Form.Control>
    </Tab>
      
      <Tab eventKey="selection" title="Selection" >            
         <h4>Resultat</h4>
          {select ? select.aller + select.retour : ""},
          <Button>Payer</Button>
      </Tab>
      
  </Tabs>
  </form>
 </>
  )
};

export default TabComponent;
