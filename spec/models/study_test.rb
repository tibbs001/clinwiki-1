# TODO - missing a test for link - previous tested on NCT00005669 but that study seems to have been updated to remove it.
# 		- primary/secondary outcomes
  RSpec.describe Study do
    it "should instantiate a study with expected data" do
      term='chordoma'
      data=JSON.parse(File.read("spec/support/json_data/#{term}.json")).first['_source']
      study=Retriever.instantiate_from(data)
      expect(study.acronym).to eq('ISAC')
      expect(study.brief_title).to eq('Ion Irradiation of Sacrococcygeal Chordoma')
      expect(study.phase).to eq('Phase 2')
      expect(study.start_date).to eq('2013-01-01')
      expect(study.keywords.size).to eq(5)
      kw=study.keywords.select{|x|x.name=='hypofractionation'}.first
      expect(kw.name).to eq('hypofractionation')
   end
  end
